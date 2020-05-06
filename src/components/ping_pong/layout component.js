return function() {
  async function getConfigData(key) {
    //replace url with static asset in Arcadia
    const config = await fetch(`/arc/reports/staticasset/raw/4.js`, {
      cache: "no-store"
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .catch();
    return config[key];
  }
  const service = {
    getLegends: async () => {
      return getConfigData("legend");
    },
    getStyles: async () => {
      return getConfigData("styles");
    }
  };

  let f = function() {};
  f.version = '1';
  f.settings = () => [];

  f.disableDraw = () => true;
  f.beforeDraw = () => {
    document.getElementById(arcapi.chartId()).innerHTML = "";
  };

  f.afterDraw = () => {
    let chart = document.getElementById(arcapi.chartId());
    chart.appendChild(document.createElement("pingpong-layout"));
    chart.style.setProperty("height", "100vh");
    chart.style.setProperty("text-align", "center");
  };

  class PingPongLayout extends HTMLElement {
    constructor() {
      super();
      this.element = this.attachShadow({ mode: "open" });
      this.records = [];
    }

    async render() {
      const styles = await service.getStyles();
      const legends = await service.getLegends();

      const template = document.createElement("template");
      template.innerHTML = `
          <style>
            :host {
              font-family: inconsolata,Monaco,lucida console,Consolas,courier new;
              display: inline-block;
              color: white;
            }
            #header {
              display: inline-block;
              position: absolute;
              top: 10px;
              left: 20px;
            }
            #latency span {
              vertical-align: middle;
              display: inline-block;
              margin-top: -25px;
            }
            #footer {
              position: absolute;
              text-align: left;
              padding: 10px;
              font-size: 14px;
              width: 465px;
              margin: 0 auto;
              left: 20px;
              bottom: 10px;
            }
            #footer ul {
              padding-left: 20px;
              list-style-type: decimal;
            }
            #footer li {
              padding-bottom: 5px;
              line-height: 15px;
              list-style-type: none;
            }
            .dot {
              height: 8px;
              width: 8px;
              border-radius: 50%;
              display: inline-block;
              margin-right: 10px;
              border-style:solid;
              border-width: 2px;
            }
            h1, h3 {
              font-weight: 400;
            }
          </style>
          <div id="main-wrapper">
              <div id="header">
                  <h1 id="current-time">00:00:00xx</h1>
                  <h2 id="time-zone">(IST)</h2>
                  <h3>
                      Customer Activity Movement (CAM)<br>
                      a.k.a. Ping-Pong Chart
                  </h3>
                  <div id="latency">
                    <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                            <g fill="#FF0000" id="101 Warning">
                                <path d="M14.4242327,6.14839275 C15.2942987,4.74072976 16.707028,4.74408442 17.5750205,6.14839275 L28.3601099,23.59738 C29.5216388,25.4765951 28.6755462,27 26.4714068,27 L5.5278464,27 C3.32321557,27 2.47386317,25.4826642 3.63914331,23.59738 Z M16,20 C16.5522847,20 17,19.5469637 17,19.0029699 L17,12.9970301 C17,12.4463856 16.5561352,12 16,12 C15.4477153,12 15,12.4530363 15,12.9970301 L15,19.0029699 C15,19.5536144 15.4438648,20 16,20 Z M16,24 C16.5522848,24 17,23.5522848 17,23 C17,22.4477152 16.5522848,22 16,22 C15.4477152,22 15,22.4477152 15,23 C15,23.5522848 15.4477152,24 16,24 Z M16,24" id="Triangle 29" />
                            </g>
                        </g>
                    </svg>
                    <span id="latency-time">12:00:00pm</span>
                  </div>
              </div>
              <div id="footer">
                <p>Legend:</p>
                <ul>
                ${legends
                  .map(legend => {
                    const style = styles.find(
                      style => style.id == legend.style
                    );
                    return `
                  <li>
                    <span class="dot" style="background:${
                      style.fill
                    };border-color:${style.stroke || "transparent"};"></span>
                      ${legend.description}
                    </li>
                `;
                  })
                  .join(" ")}
                </ul>
              </div>
            <ping-pong></ping-pong>
          </div>
        `;

      this.element.appendChild(template.content.cloneNode(true));

      this.element.addEventListener("pingpong.time", e => {
        const currentTime = this.element.getElementById("current-time");
        currentTime.textContent = e.detail;
      });

      this.element.addEventListener("pingpong.latency", e => {
        const latencyContainer = this.element.getElementById("latency");
        latencyContainer.style.display = e.detail.show
          ? "inline-block"
          : "none";
        if (e.detail.show) {
          const latencyTime = this.element.getElementById("latency-time");
          latencyTime.textContent = e.detail.time;
        }
      });
    }

    // connnectedCallback is like ComponentWillMount
    connectedCallback() {
      this.render();
    }
  }
  if (!customElements.get("pingpong-layout")) {
    customElements.define("pingpong-layout", PingPongLayout);
  }

  return f;
}();
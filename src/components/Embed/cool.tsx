

// @ts-nocheck
const static_js = {
  "styles": [
    {
      "id": "0",
      "fill": "rgb(204, 204, 204)"
    },
    {
      "id": "1",
      "fill": "#198bff"
    },
    {
      "id": "2",
      "fill": "#d4933f"
    },
    {
      "id": "3",
      "fill": "#fdb813"
    },
    {
      "id": "4",
      "fill": "#ff750a"
    },
    {
      "id": "5",
      "fill": "transparent"
    },
    {
      "id": "aaerror",
      "stroke": "#FF0000",
	  "stroke-width":"4px"
    },
    {
      "id": "pderror",
      "stroke": "#21B400",
	  "stroke-width":"4px"
    }
  ],
  "valcols": [
    {
      "col": "visid"
    },
    {
      "col": "index"
    },
    {
      "col": "error",
      "val": [
        {
          "name": "aa error",
          "style": "aaerror"
        },
        {
          "name": "pd error",
          "style": "pderror"
        }
      ]
    },
    {
      "col": "style"
    }
  ],
  "act_codes": [
    {
      "id": "2",
      "short": "Logout/Timeout",
      "desc": "Logout",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "22",
      "short": "Campaigns",
      "desc": "Campaigns",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "15",
      "short": "Deals",
      "desc": "Deals",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "3",
      "short": "Recharge",
      "desc": "Recharge",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "12",
      "short": "UPI Management",
      "desc": "UPI Management",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "4",
      "short": "Others",
      "desc": "Others",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "9",
      "short": "FA-UPI",
      "desc": "Fund Account (UPI)",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "7",
      "short": "FT-UPI",
      "desc": "Fund Transfer (UPI)",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "5",
      "short": "FT-MMID/Mobile",
      "desc": "Fund Transfer (Mobile/MMID)",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "8",
      "short": "FT-Account",
      "desc": "Fund Transfer (Account)",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "6",
      "short": "FT-Generic",
      "desc": "Funds Transfer (Generic)",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "0",
      "short": "Dashboard",
      "desc": "Dashboard",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "11",
      "short": "Txn History",
      "desc": "Transaction History",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "14",
      "short": "Bills",
      "desc": "Bills",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "19",
      "short": "Deposit",
      "desc": "Deposit",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "10",
      "short": "Debit Card",
      "desc": "Debit Card",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "18",
      "short": "Personal Loan",
      "desc": "Personal Loan",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "20",
      "short": "Mutual Funds",
      "desc": "Mutual Funds",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },

    {
      "id": "21",
      "short": "Insurance",
      "desc": "Insurance",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "23",
      "short": "Profile",
      "desc": "Profile",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "13",
      "short": "Customer Service",
      "desc": "Customer Service",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "1",
      "short": "Global Menu",
      "desc": "Global Menu",
      "styles": {
        "fill": "rgb(165, 165, 165)"
      }
    },
    {
      "id": "16",
      "short": "Enter Shop",
      "desc": "Enter",
      "coords": {
        "x": 66,
        "y": 375,
        "r": 25
      },
      "showTotal": false,
      "styles": {
        "fill": "#bbbbbb",
        "fill-opacity": 0
      }
    },
    {
      "id": "17",
      "short": "Exit Shop App",
      "desc": "Exit Shop App",
      "coords": {
        "x": 850,
        "y": 120,
        "r": 20
      },
      "styles": {
        "fill": "#75929e",
        "fill-opacity": 0,
        "visibility": "hidden"
      }
    }
  ],
  "legend": [
    {
      "style": "0",
      "description": "represents a Customer on SSS Shop"
    },
    {
      "style": "1",
      "description": "represents an Prospect Customer on SSS Shop"
    },    {
      "style": "4",
      "description": "represents a FSA Customer on SSS Shop"
    },
    {
      "style": "3",
      "description": "represents a LSA Customer on SSS Shop"
    },
    {
      "style": "aaerror",
      "description": "represents struggles due to errors"
    }
  ]
}

export class PingPong extends HTMLElement {
  constructor() {
    super();
    this.element = this.attachShadow({ mode: "open" });
    this.USER_SPEED = "slow";
    this.padding = 1;
    this.maxRadius = 3;

    this.total = 0;
    this.lastDataRecieved = "";
    this.isDelayed = false;

    // realtime settings
    this.enableRealtime = true;

    // in seconds
    this.timer = 0;
    this.latencyThreshold = 60000;
    this.userActivityDropTime = 60000;
    this.userActivityMaxAge = 70;
    this.timezoneOffset = 330; // IST in mins

    // width/height configuration
    this.width = 1400;
    this.height = 850;

    // used in timer()
    this.speeds = { slow: 100, medium: 200, fast: 50 };

    this.svg = null;

    this.avg_cust = 0;

    this.label = undefined;
    this.foci = undefined;

    // Used for percentages by minute
    this.act_counts = [];

    this.nodes = [];

    this.force = undefined;
    this.circle = undefined;

    this.styles = [];
    this.valcols = [];

    // default errorIndex based on valcols
    this.errorIndex = 0;

    // node queue
    this.nodeQueue = [];
    
    // pruneIds
    this.pruneIds = [];
  }

  async render(element) {


    // console.log(cool)
    const template = document.createElement("template");
    template.innerHTML = `

      `;

    element.appendChild(template.content.cloneNode(true));

    // force
    this.force = d3.layout
      .force()
      .nodes([]) // Initialize with 0 nodes
      .size([this.width, this.height])
      .gravity(0)
      .charge(0)
      .friction(0.3)
      .on("tick", this.tick.bind(this))
      .start();

    // Start the SVG
    this.svg = d3
      .select(element)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("style", "margin: 0 auto;");

    // bubbles
    this.nodes = this.force.nodes();
    this.circle = this.svg.selectAll(".node");

    let { label, foci } = await this.setActivityCoordinates();
    this.label = label;
    this.foci = foci;

    this.styles = static_js.styles
    this.valcols = static_js.valcols

    await this.setActivityRadius(); //creates the activity nodes

    this.startRecievingData(); //creates customer nodes
    this.startStreaming(); //writes into event bus
    this.startPruning(); //consolidates the ids that have been updated
    this.startRenderPush(); //updates position of customer node

    this.force.friction(0.9);

    this.startTimer();
  }

  async startStreaming() {
    // Stream.publish("user_activity", await service.getDaysSimulated());
    // setTimeout(this.startStreaming.bind(this), 10000);
  }

  //------------------------------------------------------------
  //---------- Populates activity with customer nodes ----------
  //------------------------------------------------------------
  async startRecievingData() {
    // Stream.subscribe("user_activity", rows => {
      // if (!rows || rows.length === 0) {
      //   // show latency flag if no data for more than 10 mins
      //   console.log('no data!')
      //   let hasNoData =
      //     this.getSecondsFromNow(this.lastDataRecieved) >=
      //       this.latencyThreshold && this.enableRealtime;

      //   hasNoData ? (this.isDelayed = true) : (this.isDelayed = false);

      //   return;
      // }

      // A node for each person's schedule
      var sdk = this.sdk
      // console.log(this.sdk)
      const data = await sdk.ok(sdk.run_look({
        look_id: 3,
        result_format: 'json'
      }))
      for (let d of data) {
        d['timestamp'] = new Date(d['mock_data_pp.timestamp']["value"] || d['mock_data_pp.timestamp'])
        d['value'] = d['mock_data_pp.value']["value"] ||  d['mock_data_pp.value']
        let timestamp = d.timestamp;     
        let diff = Math.abs(this.getDateOffset().getTime() - this.userActivityDropTime * 1000 - this.getDateOffset(d.timestamp).getTime()) /1000
        // console.log('diff',diff)
        // console.log('lastdatareceived',this.lastDataRecieved)
        // console.log('timediff',this.getSecondsFromNow(timestamp))
        // console.log('systime', this.getDateOffset().getTime())
        // console.log('recordtime', this.getDateOffset(timestamp).getTime())
        // console.log('last', this.getSecondsFromNow(this.lastDataRecieved))
        this.lastDataRecieved = d.timestamp;
        
        
        let hasLatency =
          this.getSecondsFromNow(d.timestamp) >= this.latencyThreshold &&
          this.enableRealtime;          
        
        hasLatency ? (this.isDelayed = true) : (this.isDelayed = false);
        
        if (hasLatency) {
          continue;
        }
        // drop records that are passing activity drop time 
        if (
          this.getSecondsFromNow(d.timestamp) >= this.userActivityDropTime &&
          this.enableRealtime
        ) {
          continue;
        }

        // show latency flag if records and current time is more than 10 mins apart

        //let hasLatency =
        //  this.getSecondsFromNow(d.timestamp) >= this.latencyThreshold &&
        //  this.enableRealtime;

        //hasLatency ? (this.isDelayed = true) : (this.isDelayed = false);

        let activity = d.value.split(",");
        let actValue = activity[this.getConfigIndex("index")];
        let styleValue = activity[this.getConfigIndex("style")];

        //***set transparent for 'enter digibank' --- max// 
        //if (actValue === "16") {
          //styleValue = "5";
        //}

        let scheds = {
          id: activity[this.getConfigIndex("visid")],
          act: actValue,
          style: styleValue,
          errorStyle: this.getErrors(activity)
        };
        let { act, style, errorStyle } = scheds;
        console.log(scheds)
        let nodeIndex = this.nodes.findIndex(node => node.id == scheds.id);
        if (nodeIndex >= 0) {
          if (this.nodes[nodeIndex].act != act) {
            this.nodeQueue.push({
              ...this.nodes[nodeIndex],
              act,
              styles: this.getCombinedNodeStyle(style, errorStyle),
              timestamp: d.timestamp,
              index: nodeIndex
            });
          }
        } else {
          this.nodeQueue.push({
            ...scheds,
            radius: 3,
            x: this.foci[act].x + Math.random(),
            y: this.foci[act].y + Math.random(),
            styles: this.getCombinedNodeStyle(style, errorStyle),
            timestamp: d.timestamp,
            index: -1
          });
        }
      }
    // });
  }

  processSeconds(timestamp) {
    //let seconds = new Date(timestamp).getSeconds();
    //let tolerate =
    //  this.getDateOffset().getSeconds() - this.userActivityDropTime;
    //let ref = tolerate >= 0 ? tolerate : this.getDateOffset().getSeconds();
    //let diff = ref - seconds;
    //return { seconds, ref, diff };
    
    //let seconds = Math.abs(this.getDateOffset().getTime() - this.getDateOffset(timestamp).getTime()) / 1000
    //let tolerate = seconds - this.userActivityDropTime 
    //let diff = seconds >= 60 ? tolerate : seconds
    //return {diff};
    
    let seconds = new Date(timestamp).getSeconds();
    let ref = this.getDateOffset().getSeconds();
    let diff = ref - seconds;
    return { seconds, ref, diff };
    
  }

  //----------------------------------------------------------
  //---------- Removes customer nodes from activity ----------
  //----------------------------------------------------------
  startPruning() {
    console.log('initial prune', this.nodes);
    if (this.nodes.length > 0 && this.nodes !=null) {
        this.nodes.forEach(node => {
          const { diff } = this.processSeconds(node.age);
          console.log('moveout',diff)
        
          if (diff + 60 >= this.userActivityMaxAge) {
          //if (Math.round(Math.random())) {
            //console.log(node);
            this.pruneIds.push(node);
          }
        });

        //move nodes to logout/timeout circle position *** max//
        this.MoveInactive(this.pruneIds);
        
        if (this.pruneIds.length > 0) {
          this.updateTotals();
          this.restart();
        }
    }
    setTimeout(this.startPruning.bind(this), this.userActivityMaxAge * 1000);
  }

  //--------------------------------------------------
  //---------- Monitors customer's movement ----------
  //--------------------------------------------------
  startRenderPush() {
    let removeFromNodeQueue = [];
    let nodelist = [];
    
    let moveNodes = this.nodeQueue.filter(d => {
      const { diff } = this.processSeconds(d.timestamp);
      return diff >= 0 && diff <= this.userActivityDropTime;
    });

    nodelist = this.nodeQueue.filter(d => {
      const { diff } = this.processSeconds(d.timestamp);
      return diff > this.userActivityMaxAge || diff < -10
    });

    this.MoveInactive(nodelist);

    for (let d of moveNodes) {
      removeFromNodeQueue.push(d.id);
      if (d.index >= 0 && this.nodes[d.index] !== undefined) {
        if (this.act_counts[this.nodes[d.index].act] > 0) {
          this.act_counts[this.nodes[d.index].act] -= 1;
        }
        this.act_counts[d.act] += 1;
        this.nodes[d.index] = {
          ...d,
          age: new Date()
        };
        this.force.resume();
        break;
      } else {
        this.nodes.push({
          ...d,
          age: new Date()
        });

        this.act_counts[d.act] += 1;

        //this.restart();
        break;
      }
    }


    this.updateTotals();
    this.restart();
    
    this.nodeQueue = this.nodeQueue.filter(
      x => !removeFromNodeQueue.includes(x.id)
    );
    //console.log(this.nodeQueue);
    this.clearNodes();
    
    let timeout = 1000 / moveNodes.length;
    timeout = timeout == Infinity ? 100 : timeout;

    setTimeout(this.startRenderPush.bind(this), Math.floor(timeout));
  }
  
  //---------- Move modes to timeout position ----------
  MoveInactive(nodelist) {
    //console.log('initial', this.nodes);
    if (nodelist.length > 0 && nodelist!=null) {
        //move nodes to timeout circle position *** max//
        for (let d of nodelist) {
          //console.log('refreshmove',this.processSeconds(d.timestamp));
          const nodeIndex = this.nodes.findIndex(node => node.id == d.id);
          if (nodeIndex >= 0 && this.nodes[nodeIndex] !== undefined) {
            if (this.act_counts[this.nodes[nodeIndex].act] > 0) {
              this.act_counts[this.nodes[nodeIndex].act] -= 1;
            }
            this.nodes[nodeIndex].act = 2
            d.act = 2
            this.act_counts[this.nodes[nodeIndex].act] += 1;
            this.nodes[nodeIndex] = {
              ...d,
              age: new Date()
            };
            this.force.resume();
            this.act_counts[this.nodes[nodeIndex].act] -= 1;
            this.fastSliceArray(this.nodes, nodeIndex);
          }
        }
    }
  }
  
  clearNode(node) {
    this.act_counts[node.act] -= 1;
    this.nodes = this.nodes.filter(x => x != node.id);
    this.nodeQueue = this.nodeQueue.filter(x => x != node.id);
  }

  clearNodes() {
    let removeIds = [];

    for (const node of this.nodeQueue) {
      //console.log(node)
      if (node.index == null) {
        removeIds.push(node.index);
        this.act_counts[node.act] -= 1;
      }
    }

    if (removeIds.length > 0) {
      this.nodes = this.nodes.filter(x => !removeIds.includes(x.id));
      this.nodeQueue = this.nodeQueue.filter(x => x.index != null);
    }
  }

  getConfigIndex(key) {
    return this.valcols.findIndex(cols => cols.col == key);
  }

  //-----------------------------------------------------------------
  //---------- Modifies style based on error type (if any) ----------
  //-----------------------------------------------------------------
  getErrors(activity) {
    const errorIndex = this.getConfigIndex("error");
    const featureIndex = this.getConfigIndex("index");
    const errorValues = activity[errorIndex].split("-");
    if (errorValues[this.errorIndex] == 1) {
      const errorStyle = this.valcols[errorIndex].val[this.errorIndex];

      if (activity[featureIndex] == "16") {
        return "5";
      }

      return errorStyle.style;
    }
    return null;
  }

  //------------------------------------------------
  //---------- Calculates time difference ----------
  //------------------------------------------------
  getSecondsFromNow(date) {
    return (
      Math.abs(
        this.getDateOffset().getTime() - this.getDateOffset(date).getTime()
      ) / 1000
    );
  }

  //--------------------------------------------
  //---------- Calculates time in GMT ----------
  //--------------------------------------------
  getDateOffset(date) {
    let currentTime = date ? new Date(date) : new Date();
    let currentOffset = date ? currentTime.getTimezoneOffset(): 0;
    return new Date(currentTime.getTime() +Math.abs(currentOffset*60000));
  }

  getNodeStyle(style) {
    const d = this.styles.find(x => x.id == style);

    if (!d) {
      return;
    }

    return {
      ...d,
      opacity: d.opacity === undefined ? 0.8 : d.opacity,
      stroke: d.stroke === undefined ? "" : d.stroke,
      "fill-opacity": d["fill-opacity"] === undefined ? 1 : d["fill-opacity"],
      "stroke-width": d["stroke-width"] === undefined ? 0 : d["stroke-width"],
      "stroke-opacity": d["stroke-opacity"] === undefined ? 1 : d["stroke-opacity"]
    };
  }

  getCombinedNodeStyle(style, errorStyle) {
    if (errorStyle) {
      return {
        ...this.getNodeStyle(style),
        ...this.styles.find(x => x.id == errorStyle)
      };
    }
    return this.getNodeStyle(style);
  }

  setNodeStyle() {
    this.style("fill", d => d.styles.fill)
      .style("opacity", d => d.styles.opacity)
      .style("fill-opacity", d =>
        d.styles["fill-opacity"] === undefined
          ? 0.3
          : d.styles["fill-opacity"]
      )
      .style("stroke", d =>
        d.styles.stroke === undefined ? "transparent" : d.styles.stroke
      )
      .style("stroke-width", d => d.styles["stroke-width"])
      .style("stroke-opacity", d => d.styles["stroke-opacity"])
      .style("visibility", d => d.styles.visibility);
  }

  restart() {
    this.circle = this.circle.data(this.nodes);

    this.circle
      .enter()
      .append("circle")
      .attr("r", d => d.radius)
      .call(this.setNodeStyle);

    this.circle.exit().remove();

    this.force.start();
  }

  tick(e) {
    // processing of small bubbles
    let k = 0.04 * e.alpha;

    // Push nodes toward their designated focus.
    this.nodes.forEach((o, _i) => {
      let curr_act = o.act;

      // Make sleep more sluggish moving.
      let damper = 1;

      // brings bubbles close together as well as make them move overtime
      o.y += (this.foci[curr_act].y - o.y) * k * damper;
      o.x += (this.foci[curr_act].x - o.x) * k * damper;
    });

    // this is consuming too much CPU due to number of bubbles need to be updated
    // sets coordinates of the svg circles based on the values computed from above
    this.circle
      .data(this.nodes)
      .each(this.collide(0.1))
      .attr("cx", d => (isNaN(d.x) ? 0 : d.x))
      .attr("cy", d => (isNaN(d.y) ? 0 : d.y))
      .call(this.setNodeStyle);
  }

  // Resolve collisions between nodes.
  // gives bubbles some mass and adjusting position accordingly
  collide(alpha) {
    let quadtree = d3.geom.quadtree(this.nodes);
    return d => {
      let r = d.radius + this.maxRadius + this.padding,
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
      quadtree.visit((quad, x1, y1, x2, y2) => {
        if (quad.point && quad.point !== d) {
          let x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r =
              d.radius +
              quad.point.radius +
              (d.act !== quad.point.act) * this.padding;
          if (l < r) {
            l = ((l - r) / l) * alpha;
            d.x -= x *= l;
            d.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      });
    };
  }

  //------------------------------------------------------
  //---------- Updates the total # of customers ----------
  //------------------------------------------------------
  updateTotals() {
    this.total = this.getTotalUsers(this.act_counts);

    // Total Customers
    this.element.dispatchEvent(
      new CustomEvent("pingpong.total", {
        bubbles: true,
        composed: true,
        detail: {
          total_cust: this.total
        }
      })
    );

    if (document.getElementById("russ").innerHTML != this.total) {
      document.getElementById("russ").innerHTML = this.total;
    }

    // Update percentages
    this.label.selectAll("tspan.actpct").text(d => {
      let count = this.act_counts[d.id] || 0;
      let percentage = this.readablePercent(
        this.act_counts[d.id],
        this.total
      );

      return this.foci[d.id].showTotal ? count + "|" + percentage : "";
    });
  }

  //-----------------------------------------------------------------------------------------
  //---------- Excludes customers from total count based on activity configuration ----------
  //-----------------------------------------------------------------------------------------
  getTotalUsers(counts) {
    return Object.keys(counts).reduce(
      (a, b) => a + (this.foci[b] && !this.foci[b].showTotal ? 0 : counts[b]),
      0
    );
  }

  //----------------------------------------------------
  //---------- Updates clock and latency flag ----------
  //----------------------------------------------------
  startTimer() {
    this.element.dispatchEvent(
      new CustomEvent("pingpong.time", {
        bubbles: true,
        composed: true,
        detail: this.formatAMPM(this.getDateOffset())
      })
    );

    // if greater than 10 mins || 600 seconds show latency
    if (this.isDelayed && this.lastDataRecieved !== "") {
      this.element.dispatchEvent(
        new CustomEvent("pingpong.latency", {
          bubbles: true,
          composed: true,
          detail: {
            show: true,
            time: this.formatAMPM(this.lastDataRecieved)
          }
        })
      );
    } else {
      this.element.dispatchEvent(
        new CustomEvent("pingpong.latency", {
          bubbles: true,
          composed: true,
          detail: {
            show: false,
            time: null
          }
        })
      );
    }

    setTimeout(this.startTimer.bind(this), 1000);
  }

  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let strTime = `${hours}:${minutes}:${seconds}${ampm}`;

    return strTime;
  }

  fastSliceArray(arr, index) {
    //console.log('sliceindex',index)
    //console.log('bef arritem',arr[index])
    //console.log('bef arritem lst',arr[index+1])
    //arr.splice(index, 1);
    arr[index] = arr[arr.length - 1];
    arr.pop();
    //console.log('post arritem',arr[index])
    return arr;
  }

  //-----------------------------------------------------------
  //---------- Creates the circles for each activity ----------
  //-----------------------------------------------------------
  async setActivityRadius() {
    //generates circles for each feature based on coordinates from setActivityCoordinates()
    let fociList = Object.keys(this.foci).map(key => {
      return this.foci[key];
    });

    // Activity circle
    this.svg
      .selectAll("circle")
      .data(fociList)
      .enter()
      .append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 20)
      .call(this.setNodeStyle);
  }

  //---------------------------------------------------------------------
  //---------- Sets the coordinates for each activity's circle ----------
  //---------------------------------------------------------------------
  async setActivityCoordinates() {
    //generates coordinates for each feature
    let act_codes = static_js.act_codes

    this.act_counts = new Array(act_codes.length).fill(0);

    let actFixedCoords = act_codes.filter(a => a.coords);
    let theta = (2 * Math.PI) / (act_codes.length - actFixedCoords.length);

    let xCenter = 757.5;
    let yCenter = 425;
    let actRadius = 300;
    // Coordinates for activities
    let foci = {};

    act_codes.forEach((code, i) => {
      const { coords, showTotal, ...codeSettings } = code;
      foci[code.id] = {
        x: xCenter + 1.5 * actRadius * Math.cos(i * theta),
        y: yCenter + actRadius * Math.sin(i * theta),
        ...coords,
        ...codeSettings,
        showTotal: showTotal !== undefined ? showTotal : true
      };

      if (foci[code.id].styles.visibility) {
        foci[code.id].showTotal =
          foci[code.id].styles.visibility == "visible";
      }
    });

    let label = this.svg
      .selectAll("textLabel")
      .data(act_codes)
      .enter()
      .append("text")
      .attr("class", "actlabel")
      .attr("x", (d, i) => {
        if (d.coords) {
          return d.coords.x;
        }
        return xCenter + 1.8 * actRadius * Math.cos(i * theta);
      })
      .attr("y", (d, i) => {
        if (d.coords) {
          return d.coords.y + (d.coords.r ? 50 : 0);
        }
        return yCenter + 1.3 * actRadius * Math.sin(i * theta);
      });

    label
      .append("tspan")
      .attr("font-size", "16")
      .attr("x", () => {
        return d3.select(this.parentNode).attr("x");
      })
      .attr("background", "red")
      .attr("text-anchor", "middle")
      .attr("visibility", d =>
        foci[d.id].styles.visibility
          ? foci[d.id].styles.visibility
          : "visible"
      )
      .text(d => d.short);

    label
      .append("tspan")
      .attr("font-size", "20")
      .attr("dy", "1.3em")
      .attr("x", function() {
        return d3.select(this.parentNode).attr("x");
      })
      .attr("text-anchor", "middle")
      .attr("visibility", d => (!foci[d.id].showTotal ? "hidden" : "visible"))
      .attr("class", "actpct");

    return {
      foci,
      label
    };
  }

  // Output readable percent based on count.
  readablePercent(n, t) {
    let pct = (100 * n) / t;
    if (pct < 1 && pct > 0) {
      pct = "<1%";
    } else {
      pct = `${Math.round(isNaN(pct) ? 0 : pct)}%`;
    }

    return pct;
  }

  // seconds to time of day. Data is seconds from 12am.
  minutesToTime(m) {
    let seconds = (m + this.starting_second) % (60 * 1440);
    let minutes = Math.floor(seconds / 60) % 60;
    let hour = Math.floor(seconds / 3600);
    let ampm;
    ampm = hour >= 12 ? "pm" : "am";
    hour = hour > 12 ? hour - 12 : hour;

    minutes = minutes >= 60 ? minutes - 60 : minutes;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let second = seconds % 60;
    second = second < 10 ? "0" + second : second;
    return hour + ":" + minutes + ":" + second + ampm;
  }

  async connectedCallback() {
    await this.render(this.element);
  }
}


// customElements.define("ping-pong", PingPong);

// looker.plugins.visualizations.add({
//   // Id and Label are legacy properties that no longer have any function besides documenting
//   // what the visualization used to have. The properties are now set via the manifest
//   // form within the admin/visualizations page of Looker
//   id: "hello_world",
//   label: "Hello World",
//   // Set up the initial state of the visualization
//   create: function(element, config) {
//     const legends = static_js.legend
//     const styles = static_js.styles
//     const template = document.createElement("template");
//     template.innerHTML = `
        // <style>
        //   body {
        //     background-color: purple;
        //   }
        //   :host {
        //     font-family: inconsolata,Monaco,lucida console,Consolas,courier new;
        //     display: inline-block;
        //     color: white;
        //   }
        //   #header {
        //     display: inline-block;
        //     position: absolute;
        //     top: 10px;
        //     left: 20px;
        //   }
        //   #latency span {
        //     vertical-align: middle;
        //     display: inline-block;
        //     margin-top: -25px;
        //   }
        //   #footer {
        //     position: absolute;
        //     text-align: left;
        //     padding: 10px;
        //     font-size: 14px;
        //     width: 465px;
        //     margin: 0 auto;
        //     left: 20px;
        //     bottom: 10px;
        //   }
        //   #footer ul {
        //     padding-left: 20px;
        //     list-style-type: decimal;
        //   }
        //   #footer li {
        //     padding-bottom: 5px;
        //     line-height: 15px;
        //     list-style-type: none;
        //   }
        //   .dot {
        //     height: 8px;
        //     width: 8px;
        //     border-radius: 50%;
        //     display: inline-block;
        //     margin-right: 10px;
        //     border-style:solid;
        //     border-width: 2px;
        //   }
        //   h1, h3 {
        //     font-weight: 400;
        //   }
        // </style>
//         <div id="main-wrapper">
//             <div id="header">
//                 <h1 id="current-time">00:00:00xx</h1>
//                 <h2 id="time-zone">(IST)</h2>
//                 <h3>
//                     Customer Activity Movement (CAM)<br>
//                     a.k.a. Ping-Pong Chart
//                 </h3>
//                 <div id="latency">
//                   <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
//                       <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
//                           <g fill="#FF0000" id="101 Warning">
//                               <path d="M14.4242327,6.14839275 C15.2942987,4.74072976 16.707028,4.74408442 17.5750205,6.14839275 L28.3601099,23.59738 C29.5216388,25.4765951 28.6755462,27 26.4714068,27 L5.5278464,27 C3.32321557,27 2.47386317,25.4826642 3.63914331,23.59738 Z M16,20 C16.5522847,20 17,19.5469637 17,19.0029699 L17,12.9970301 C17,12.4463856 16.5561352,12 16,12 C15.4477153,12 15,12.4530363 15,12.9970301 L15,19.0029699 C15,19.5536144 15.4438648,20 16,20 Z M16,24 C16.5522848,24 17,23.5522848 17,23 C17,22.4477152 16.5522848,22 16,22 C15.4477152,22 15,22.4477152 15,23 C15,23.5522848 15.4477152,24 16,24 Z M16,24" id="Triangle 29" />
//                           </g>
//                       </g>
//                   </svg>
//                   <span id="latency-time">12:00:00pm</span>
//                 </div>
//             </div>
//             <div id="footer">
//               <p>Legend:</p>
//               <ul>
//               ${legends
//                 .map(legend => {
//                   const style = styles.find(
//                     style => style.id == legend.style
//                   );
//                   return `
//                 <li>
//                   <span class="dot" style="background:${
//                     style.fill
//                   };border-color:${style.stroke || "transparent"};"></span>
//                     ${legend.description}
//                   </li>
//               `;
//                 })
//                 .join(" ")}
//               </ul>
//             </div>
//           <ping-pong></ping-pong>
//         </div>
//       `;
    
//     element.appendChild(template)
//     element.appendChild(template.content.cloneNode(true));
//     // Create a container element to let us center the text.
//     // container.appendChild(PingPong)


//   },
//   // Render in response to the data or settings changing
//   updateAsync: function(data, element, config, queryResponse, details, done) {
//     // element.innerHTML = ""
//     // element.appendChild(document.createElement("ping-pong"));
//     // Clear any errors from previous updates
//     this.clearErrors();

//     console.log(data)

//     // We are done rendering! Let Looker know.
//     done()
//   }
// });

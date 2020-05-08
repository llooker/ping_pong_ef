/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Looker Data Sciences, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./App"

document.write(`
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/2.7.4/d3.layout.min.js"></script>
<style>
:host {
  font-family:  inconsolata,Monaco,lucida console,Consolas,courier new;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  zoom: 1.25;
}
text {		
  fill: white;		
}
span {
  top: 46%;
  left: 55%;
  transform: translateX(-50%);
  position: absolute;
  font-size: 2em;
  color: white;
}
</style>
<span id="russ">0</span>
<style>
body {
  background-color: purple;
}
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
`)

import {PingPong} from "./components/Embed/cool"

customElements.define("ping-pong", PingPong);

window.addEventListener("DOMContentLoaded", event => {
  var root = document.createElement("div")
  document.body.appendChild(root)
  ReactDOM.render(<App />, root)
})

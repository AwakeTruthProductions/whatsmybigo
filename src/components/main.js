import React from "react"
import PropTypes from "prop-types"

import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"
import { Controlled as CodeMirror}  from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Divider, Box, Button, Heading, Select, Text } from 'theme-ui'

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
          position: "absolute",
          top: 0,
          zIndex: -5,
          height: "100vh",
          width: "100vw",
          opacity: 0.5,
        }}
      />
      <Heading as='h1' style={{ textAlign: "center" }}>What's My Big O?</Heading>
      <Text style={{ textAlign: "center" }}>
        Select your language and enter your code below to compute its asymptotic runtime analysis.
      </Text>
    </div>
    <Select
      style={{padding: '20'}}
      defaultValue='C++'>
      <option>C++</option>
      <option>Java</option>
      <option>Javascript</option>
      <option>Python</option>
    </Select>
    <CodeMirror
      value='#include <iostream>
      &#13;&#10;
      &#13;&#10;  
      int main() {
        &#13;&#10;
          std::cout << "Hello World!";
          &#13;&#10;
          return 0;
          &#13;&#10;
      }'
      options={{
        mode: 'xml',
        theme: 'material',
        lineNumbers: true
      }}
      onChange={(editor, data, value) => {
      }}
    />
    <br/>
    <div>
      <Button mr={2}>Generate</Button>
    </div>

      <div style={{ margin: 60, width: `250px`, position: "relative" }}>
        <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        </div>
        <div
          style={{
            position: "absolute",
            width: "250px",
            top: 0,
          }}
        >
         
        </div>
      </div>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

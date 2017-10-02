import { Flex } from "antd-mobile";
import * as React from "react";

import { CartTrigger } from "../../cart/index";
import { HomeTrigger } from "../index";

const styles = require("./styles.css");

export const HEIGHT = 40;

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <Flex className={styles.header} justify="between" align="center">
        <HomeTrigger />
        <CartTrigger />
      </Flex>
    );
  }
}

export default Header;

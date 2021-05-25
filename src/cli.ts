#!/usr/bin/env node
import * as commander from "commander";
import { translate } from "./main";
const program = new commander.Command();

//控制命令行程序的版本、名称、必须参数
program
  .version("0.0.1")
  .name("fy")
  .usage("<English>")
  .arguments("<English>")
  .action((english) => {
    translate(english);
  });

//对用户传的参数进行解析
program.parse(process.argv);

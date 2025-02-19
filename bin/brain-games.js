#!/usr/bin/env node
import {username} from '../src/cli.js'
console.log('Welcome to the Brain Games!')
export const name = username()
console.log(`Hello, ${name}!`)

import Greeting from "./saySomething";

const pgh: HTMLElement | null = document.getElementById("demo")

const greeting = new Greeting("Hello World")

greeting.sayPhrase(pgh)
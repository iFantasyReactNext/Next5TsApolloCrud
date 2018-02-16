declare var $: any;
declare var connect: any;
declare var Firebase: any;
// declare var global: {
//   prototype: NodeJS.Global;
//   fetch: any;
// }
declare namespace NodeJS {
  interface Global {
    fetch: () => Promise<any>;
  }
  interface Process {
    browser: string;
  }
}

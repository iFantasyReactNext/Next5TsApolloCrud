declare var $: any;
declare var connect: any;
declare var Firebase: any;


declare namespace NodeJS {
  interface Global {
    fetch: () => Promise<any>;
  }
  interface Process {
    browser: string;
  }
}

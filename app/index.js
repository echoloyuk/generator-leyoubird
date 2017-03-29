var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  method1() {
    this.log('method 1 just ran');
  }
  method2() {
    const name = this.config.get('name');
    if (!name) {
      this.prompt({
        type: 'input',
        name: 'name',
        message: 'what is your name?',
        default: this.name,
        store: false
      }).then((answer) => {
        this.log('your name is', answer.name);
        this.log('I will memory your name');
        this.config.set({
          name: answer.name
        })
      });
    } else {
      this.log('I know you! You are', name);
    }
  }
};
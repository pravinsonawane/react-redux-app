console.log("I am in Check.js file");
console.log("Process object has all node values");
/*
    The process object is a global that provides information about, and control over, the current Node.js process.
    We can check npm packages which we have installed. If package name having '-' in the name then replace with '_' 
    e.g  css-loader will be checked as  npm_package_dependencies_css_loader. as below
*/
// console.log(process.env.npm_package_dependencies_css_loader);

/*
    Read config data of package.json
*/
console.log(process.env.npm_package_config_data);


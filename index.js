module.exports = () => {
  return {
    postcssPlugin: 'postcss-root-var',
    prepare() {
      const vars = {};
      return {
        Declaration (decl) {
          if (decl.variable) {
            vars[`root-var(${decl.prop})`] = decl.value;
          }
        },
        Root (root) {
          Object.keys(vars).map((key) => {
            root.replaceValues(key, { fast: 'root-var' }, () => {
              return vars[key];
            });
          });
        }
      }
    }
  }
}
module.exports.postcss = true;

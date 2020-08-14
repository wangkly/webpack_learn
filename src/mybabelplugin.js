export default func = ({
  types: t
}) => {
  return {
    visitor: {
      Identifier(path, state) {
        if (t.isIdentifier(path.node, {
          name: 'console'
        })) {
          path.parentPath.parentPath.remove();
        }

        if (t.isIdentifier(path.node, {
          name: 'log'
        })) {
          path.node.name = 'logx';
        }

        if (t.isIdentifier(path.node, {
          name: 'func'
        })) {
          path.node.name = 'funA';
        }

        console.log('path.node==>', path.node);
      },

      BinaryExpression(path, state) {
        const node = path.node;
        let result;

        if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
          result = node.left.value + node.right.value;
        }

        path.replaceWith(t.numericLiteral(result));
        console.log('BinaryExpression path.node==>', path.node);
      },

      ReturnStatement(path) {
        path.replaceWithMultiple([t.expressionStatement(t.stringLiteral("Is this the real life?")), t.expressionStatement(t.stringLiteral("Is this just fantasy?")), t.expressionStatement(t.stringLiteral("(Enjoy singing the rest of the song in your head)"))]);
      } // ImportDeclaration(path,state){
      //     const specifiers = path.node.specifiers;
      //     const source = path.node.source;
      //     if(source.value == 'antd'){
      //         const importSpecifiers = specifiers.filter(specifier =>
      //             t.isImportSpecifier(specifier));
      //             console.log('importSpecifiers==>',importSpecifiers[0]);
      //         let declarations = importSpecifiers.map((specifier)=>{
      //             return t.ImportDeclaration( 
      //                     t.importDefaultSpecifier(specifier.local),
      //                     t.StringLiteral(`${source.value}/lib/${specifier.local.name}`)
      //                     )
      //         })
      //         path.replaceWithMultiple(declarations)
      //     }
      // }


    }
  };
};

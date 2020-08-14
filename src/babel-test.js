import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from '@babel/generator';
import * as t from '@babel/types';
const code = `function square(n) {
    return n * n;
  }`;


  const ast = parser.parse(code);
  console.log('ast===>',ast);
  traverse(ast, {
    enter(path) {
        console.log('path===>',path)
      if (path.isIdentifier({ name: "n" })) {
        path.node.name = "x";
      }

    //   if(t.isBinaryExpression(path.node)){
    //     path.replaceWith(
    //         t.binaryExpression("**", path.node.left, t.NumericLiteral(2))
    //     )
    //   }


    //   if(t.isReturnStatement(path.node)){
    //     path.replaceWithMultiple([
    //         t.expressionStatement(t.stringLiteral("Is this the real life?")),
    //         t.expressionStatement(t.stringLiteral("Is this just fantasy?")),
    //         t.expressionStatement(t.stringLiteral("(Enjoy singing the rest of the song in your head)")),
    //       ]);
    //   }

    }
  });


  const output = generate(ast, { /* options */ }, code);

  console.log('output===>',output);
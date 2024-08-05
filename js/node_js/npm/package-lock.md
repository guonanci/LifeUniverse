after node 7(8), we'll see package-lock.json, which is automatically generated for any operations where npm nodifies either the node_moudles tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates


*This file is intended to be committed into source repositories, and serves various purposes:*

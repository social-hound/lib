# How this works

By installing this package through NPM, you are also installing prisma and the prisma client. The client is automatically generated _based upon the schema file in this folder_.

This means that you can import the client like you normally would without having to worry about standing up the schema:

```ts
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
```

## Example with checking global node:

```ts
import {PrismaClient} from '@prisma/client';

interface Global extends NodeJS.Global {
  prisma?: PrismaClient;
}

const globalNode: Global = global;

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!globalNode.prisma) {
    globalNode.prisma = new PrismaClient();
  }
  prisma = globalNode.prisma;
}
```

import { PrismaClient } from "@prisma/client";

declare global {
  /* eslint-disable-next-line */
  var prisma: PrismaClient | undefined;
}

const prisma = (() => {
  if (process.env.NODE_ENV !== "production") {
    return new PrismaClient();
  }
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  return global.prisma;
})();

export default prisma;

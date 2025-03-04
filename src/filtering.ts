import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          published: true,
        },
        {
          title: {
            contains: "Software",
          },
        },
      ],
    },
  });
  await getInDepthData();
};

const notFiltering = async () => {
  return await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "Software",
          },
        },
      ],
    },
  });
};

const startsWith = async () => {
  return await prisma.user.findMany({
    where: {
      email: {
        startsWith: "fahim",
      },
    },
  });
};

const endWith = async () => {
  return await prisma.user.findMany({
    where: {
      email: {
        startsWith: "fahim",
      },
    },
  });
};
const getInDepthData = async () => {
  return await prisma.user.findMany({
    where: {
      id: 3,
    },
    include: {
      posts: true,
    },
  });
};

const runFilters = async () => {
  await filtering();
  await notFiltering();
  await startsWith();
};

runFilters();

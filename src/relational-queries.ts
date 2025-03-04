import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const relationalQuerise = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
};

//  relational filters

const fetchPublishedPostUsers = async () => {
  const publishedPostUsers = await prisma.user.findMany({
    where: {
      posts: {
        some: {
          published: true,
        },
      },
    },
  });
  console.log(publishedPostUsers, { depth: Infinity });
};

fetchPublishedPostUsers();
relationalQuerise();

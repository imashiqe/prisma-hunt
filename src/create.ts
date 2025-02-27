import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createUser = await prisma.user.create({
    data: {
      username: "fahim2",
      email: "fahim@gmail.com",
      role: UserRole.user,
    },
  });
  console.log(createUser);
};

main();

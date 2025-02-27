import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "fahim2",
  //     email: "fahim@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(createUser);
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "I am a developer:",
  //     userId: 1,
  //   },
  // });
  // console.log(createProfile);
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software Engineering",
  //   },
  // });
  // console.log(createCategory);
};

main();

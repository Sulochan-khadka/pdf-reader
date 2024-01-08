import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  console.log(user);
  return (
    <div>
      {/* {`Hey ${user.email}, Welcome to Quill`} */}
      hello user this is not working
    </div>
  );
};

export default Page;

import { NextResponse } from 'next/server';

const fetchUserDetails = async () => {
  const data = await fetch(`https://dummyjson.com/users/2`);
  const resData = await data.json();
  return resData;
};

export const GET = async (req) => {
  console.log('req', req.url);
  try {
    const dateTime = new Date();
    const createDate = dateTime.toLocaleString();
    const userInfo = await fetchUserDetails();
    return NextResponse.json(
      {
        message: 'sucess',
        data: [{ name: 'Rohit Azad', id: 17, datetime: createDate }],
        userInfo,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: 'Error',
      },
      {
        status: 500,
      }
    );
  }
};



export const handler = async (event,context,callback) => {
  console.log('createTodo');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    })
  }
}
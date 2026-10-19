const ErrorBoundaryPage = () => {
  return (
    <div>
      <h1>Error Boundary Page</h1>
      <p>This is the error boundary page content.</p>
    </div>
  );
};

export default ErrorBoundaryPage;

export const delayedFunc = async (
  data: unknown,
  options: { shouldFail: boolean; timeout: number }
) => {
  const { shouldFail, timeout } = options;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(data);
      } else {
        resolve(data);
      }
    }, timeout);
  });
};

export function defineCancelApiObject(apiObject: Record<string, any>) {
  const cancelApiObject: Record<
    string,
    { handleRequestCancellation: () => AbortController }
  > = {};

  Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
    const cancellationControllerObject: { controller?: AbortController } = {
      controller: undefined,
    };

    cancelApiObject[apiPropertyName] = {
      handleRequestCancellation: () => {
        if (cancellationControllerObject.controller) {
          // canceling the request and returning this custom message
          cancellationControllerObject.controller.abort();
        }

        // generating a new controller
        // with the AbortController factory
        cancellationControllerObject.controller = new AbortController();

        return cancellationControllerObject.controller;
      },
    };
  });

  return cancelApiObject;
}

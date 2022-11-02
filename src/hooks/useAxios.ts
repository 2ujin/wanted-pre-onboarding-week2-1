function useAxios(api: any) {
  const API = async (params = [], queryParams = {}, config = {}) => {
    const { onSuccess, onError }: any = config;
    const { data, status } = await api(...params, queryParams);

    if (status >= 200 && status < 300) {
      if (onSuccess) {
        await onSuccess(data);
      }
      return;
    }

    if (onError) {
      await onError({ status, errorMsg: data.message });
    }
  };

  return API;
}

export default useAxios;

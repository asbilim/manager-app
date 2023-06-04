export const useFetch = (token, userdata) => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {
      const options = {
        method: "POST",
        url: "http://127.0.0.1:8000/api/manager/service/",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(userdata),
      };
  
      const fetchData = async () => {
        try {
          const response = await axios.request(options);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          setError(true);
          setErrorMessage(error.message);
        }
      };
  
      fetchData();
    }, [token, userdata]);
  
    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };
  
    return {
      data,
      isLoading,
      error,
      errorMessage,
      refetch,
    };
  };
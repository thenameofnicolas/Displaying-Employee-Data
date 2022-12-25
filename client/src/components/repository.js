import { useQuery } from '@tanstack/react-query'


export const useEmployeeData = (id) => {
  const URLServer = "http://localhost:3030";
  const { isLoading, error, data } = useQuery({
    queryKey: ["employee", id],
    queryFn: async () => {
        const response = await fetch(`${URLServer}/employees/${id}`);
        if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok')
        }
        return response.json()
    }})
     
  if (isLoading) console.log('Loading...');
  if (error) console.log('An error has occurred: ' + error.message );
  console.log(data);
}

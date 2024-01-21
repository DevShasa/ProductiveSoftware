import { useToast } from "react-native-toast-notifications";

const useToasts  = () =>{
    const toast = useToast()

    const warningToast = (warningMessage) =>{
        toast.show(warningMessage, {
          type: 'warning',
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: 'slide-in',
        })
    }

    const successToast = (successMessage) =>{
        toast.show(successMessage, {
            type: 'success',
            placement: "top",
            duration: 4000,
            offset: 30,
            animationType: 'slide-in',
          })
    }

    return  { warningToast,  successToast}
}

export default useToasts
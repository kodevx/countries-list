import { useCallback, useMemo } from 'react';

import { 
    setUserDetails, 
    setToken, 
    removeToken 
} from '@/redux/reducers/users';
import { useAppDispatch, useAppSelector } from "../store";

import { generateToken } from "@/utils/generateToken";

const useUserDetails = () => {

    const dispatch = useAppDispatch();
    const { userList } = useAppSelector(state => state.users);

    console.log("userList: ",userList);

    const handleSignIn = useCallback(
        (username) => {

            const userDetails = 
                userList && 
                userList.length > 0 &&
                userList.find(user => user.name === username);

            console.log("userDetails: ",userDetails);

            if(userDetails) {

                dispatch(
                    setUserDetails({ 
                        name: userDetails.name, 
                        token: userDetails.token 
                    })
                );
                dispatch(
                    setToken({ 
                        name: userDetails.name, 
                        token: userDetails.token 
                    })
                );
            } else {
                dispatch(
                    setUserDetails({ 
                        name: username, 
                        token: generateToken(username) 
                    })
                );
    
                dispatch(
                    setToken({
                        name: username,
                        token: generateToken(username)
                    })
                );
            }
        },
        [dispatch, userList]
    );
    
    const handleSignOut = useCallback(
        () => {
            dispatch(
                removeToken()
            );
        },
        [dispatch]
    );

    const api = useMemo(
        () => ({
            handleSignIn,
            handleSignOut
        }),
        [
            handleSignIn,
            handleSignOut
        ]
    );

    return [api];

}

export default useUserDetails;
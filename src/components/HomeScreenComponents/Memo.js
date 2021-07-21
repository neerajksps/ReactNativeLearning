import React, {useEffect, memo, useMemo, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const Memo = (props) => {

    const loginUserData = useSelector((state) => state.authData.loginUserData);
    // console.log('state gettingg==', state)
    console.log('loginUserData gettingg====', loginUserData)
    // useEffect(() => {
    //    console.log('useEffect called')
    // },[props.value])

    // const callMemoFn = () => {
        useEffect(() => {
            props.callBack();
        },[props.callBack])
    // }

    return (
        <View style={{ flex: 1 }}>
            {/* {callMemoFn()} */}
            <TouchableOpacity   
                style={{ height: 30, backgroundColor: 'red', marginTop: 30 }}
            >
             
            </TouchableOpacity>
        </View>
    )
}

export { Memo };
Memo.whyDidYouRender = true
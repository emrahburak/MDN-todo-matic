import {useSelector} from 'react-redux'
import React, { useEffect } from 'react'



const mapState = (state) => ({
    editMode : state.todosData.editMode
})




const WithMode = (WrappedComponent) => {
    const WithMode = (props) => {

        const {editMode} = useSelector(mapState);
        console.log("HOC");
        useEffect(() => {
            }, [editMode])

            return(
                <WrappedComponent editMode={editMode} {...props}/>
            );
    };
    return WithMode;
}

const UpdatedComponent = OriginalComponent => {
    return<OriginalComponent name={"emrah"}/>
}

export {
    WithMode,
    UpdatedComponent
}
import {useSelector,useDispatch} from 'react-redux'
import React, { useEffect } from 'react'
import {setModeAction} from '../../redux/Todo/todo.actions'




const mapState = (state) => ({
    editMode : state.todosData.editMode
})




const WithMode = (WrappedComponent) => {
    const WithMode = (props) => {

        const {editMode} = useSelector(mapState);
        const  dispatch = useDispatch()

        const handleEditMode = () => {
            dispatch(setModeAction(true));
        }

        const handleNormalMode = () => {
            dispatch(setModeAction(false));
        }

        useEffect(() => {
            console.log("Modo:::",editMode);
            }, [editMode])

            return(
                <WrappedComponent editMode={editMode}
                handleEditMode={handleEditMode}
                handleNormalMode={handleNormalMode}
                 {...props}/>
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
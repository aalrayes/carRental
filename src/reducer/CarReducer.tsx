import React from 'react'

export default function CarReducer<T>(state:any,action:T) {
    switch (action.type) {
        case "getCar": {
            ...state,carID = state.id
        }
    }
}

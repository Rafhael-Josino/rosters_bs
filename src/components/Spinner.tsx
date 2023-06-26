import { Circles } from "react-loader-spinner";

type Props = {
    message: string,
}

export default function Spinner(props: Props) {
    const {message} = props;

    return <div className="divSpinner">
        {message === '' ? null : <div>{message}</div>}
        <Circles
            height="80"
            width="80"
            color='rgb(106,130,168)'
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div> 
}
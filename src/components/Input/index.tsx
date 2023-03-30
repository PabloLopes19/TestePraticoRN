import * as s from "./styles";

interface props {
    label?: string;
    placeholder?: string;
    password?: boolean;
    number?: boolean;
    maxLength?: number;
    readonly?: boolean
    onChange?: (e:any) => void;
    submit?: (e:any) => void;
    value?: any;
}

export default function Input(props: props) {
    return (
        <s.Container>
            <s.label>{props.label}</s.label>

            <s.Input
                value={props.value}
                onSubmitEditing={props.submit}
                onChangeText={props.onChange}
                editable={!props.readonly}
                maxLength={props.maxLength}
                keyboardType={props.number && 'numeric'}
                placeholder={props.placeholder}
            />
        </s.Container>
    )
}
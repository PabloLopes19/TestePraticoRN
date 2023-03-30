import Input from "../../components/Input";

import axios from "axios";

import * as s from "./styles";
import { useState } from "react";
import { ActivityIndicator, Platform } from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';

type endress = {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    siafi: string;
    uf: string;
}

export default function Form({ navigation }) {
    const [eventName, setEventName] = useState("");
    const [webSite, setWebSite] = useState("");
    const [date, setDate] = useState<Date>();
    const [candidates, setCandidates] = useState(0);
    const [image, setImage] = useState("");
    const [cep, setCep] = useState<number>();
    const [endress, setEndress] = useState<endress | null>(null);

    const [cepLoading, setCepLoading] = useState(false);    

    function disableButton(){
        if(
            eventName !== "" &&
            webSite !== "" &&
            !cepLoading &&
            (candidates > 0 && candidates <= 450) &&
            endress
        ) return false;

        return true;
    }

    function handleSubmitData() {
        axios.post("https://extranet.cebraspe.org.br/AvaliacaoCSA/BackEnd/",
            {
                data: {
                    nomeEvento: eventName,
                    webSite: webSite,
                    data: "2023-03-30T13:25:57.266Z",
                    numeroMaxCandidato: Number(candidates),
                    endereco: endress,
                    imageUrl: image
                }
            }
        )
        .then(res => {
            alert("Evento criado!");
            console.log(res.data);
        })
        .catch(err => {
            console.log({
                nomeEvento: eventName,
                webSite: webSite,
                data: "2023-03-30T13:25:57.266Z",
                numeroMaxCandidato: candidates,
                endereco: endress,
                imageUrl: image
            })

            alert("Não foi possível criar o evento tente novamente mais tarde!");
            console.log(err)
        });
    }

    function handleCepFetch(){
        if(cep.toString().length != 8)
            alert("CEP inválido");
        else {
            setCepLoading(true);

            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                if(res.data.erro) {
                    alert("Não foi possível localizar este endereço 😔");
                    setEndress(null);
                }
                else
                    setEndress(res.data);

                setCepLoading(false);
            });
        }
    }

    return(
        <s.Container>
            <s.Form
                contentContainerStyle={{ paddingVertical: 25}}
            >
                <Input 
                    label="Nome do evento*"
                    placeholder="Digite aqui o nome do evento"
                    onChange={setEventName}
                />
                <Input 
                    label="Website*"
                    placeholder="Ex:. google.com"
                    onChange={setWebSite}
                />

                <s.Row>
                    {/* <Input 
                        label="Data*"
                        placeholder="Ex:. 19/02/2003"
                    /> */}
                    {/* <s.DateContainer>
                        <s.label>Data</s.label>

                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date(Date.now())}
                            mode={mode}
                            is24Hour={true}
                            onChange={() => {}}
                        />
                    </s.DateContainer> */}

                    <Input 
                        label="Qnt. de candidatos*"
                        placeholder="Ex:. 42"
                        onChange={setCandidates}
                        number
                    />
                </s.Row>

                <Input 
                    submit={handleCepFetch}
                    label="CEP*"
                    placeholder="Ex:. 00000000"
                    onChange={setCep}
                    number
                    maxLength={8}
                />

                { cepLoading && <ActivityIndicator/> }

                <s.Row>
                    <Input 
                        label="Cidade*"
                        placeholder="Ex:. Joinville"
                        value={endress ? endress!.logradouro : ""}
                        readonly
                    />
                    <Input 
                        label="Estado*"
                        placeholder="Ex:. Santa Catarina"
                        value={endress ? endress!.uf : ""}
                        readonly
                    />
                </s.Row>
                
                <Input 
                    label="Logradouro"
                    placeholder="Ex:. Costa e Silva"
                    value={endress ? endress!.logradouro : ""}
                    readonly
                />

                <Input 
                    label="Bairro*"
                    placeholder="Ex:. Costa e Silva"
                    value={endress ? endress!.bairro : ""}
                    readonly
                />

                <s.Row>
                    <Input 
                        label="Número*"
                        placeholder="Ex:. Joinville/SC"
                    />
                    <Input 
                        label="Complemento"
                        placeholder="Ex:. Costa e Silva"
                    />
                </s.Row>

                <Input 
                    label="Imagem"
                    placeholder="Ex:. https://image.jpeg"
                    onChange={setImage}
                />
            </s.Form>

            <s.Button
                disabled={disableButton()}
                onPress={() => {
                    handleSubmitData();
                }}
            >
                <s.ButtonText>Criar evento</s.ButtonText>
            </s.Button>
        </s.Container>
    )
}
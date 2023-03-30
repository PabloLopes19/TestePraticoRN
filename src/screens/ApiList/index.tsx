import * as s from "./styles";
import { ActivityIndicator, Text } from "react-native"
import { useEffect, useState } from "react";

import axios from "axios";
import ItemCard from "../../components/ItemCard";

// https://extranet.cebraspe.org.br/AvaliacaoCSA/BackEnd/

export default function ApiList({ navigation }) {
    const [data, setData] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        setLoading(true);

        axios.get(
            "https://extranet.cebraspe.org.br/AvaliacaoCSA/BackEnd/"
        ).then(res => {
            setData(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
        <s.Container>
            <s.Scroll>
                    {
                        loading
                        ? <s.Container><ActivityIndicator /></s.Container>
                        : data.map((item, i) => (
                            <ItemCard 
                                candNum={item.message.numeroMaxCandidato}
                                photo={item.message.imageUrl}
                                nomeEvento={item.message.nomeEvento}
                                website={item.message.webSite}
                                key={i} 
                            />
                        ))
                    }
            </s.Scroll>

            <s.Button
                onPress={() => navigation.navigate('Form')}
            >
                <s.ButtonText>Adicionar evento</s.ButtonText>
            </s.Button>
        </s.Container>
    )
}
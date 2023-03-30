import * as s from "./styles";

interface props {
    nomeEvento: string;
    website: string;
    photo: string;
    candNum: number;
}

export default function ItemCard(props: props) {
    return(
        <s.Container>
            <s.Row>
                <s.Photo src={props.photo} />

                <s.Col>
                    <s.Title>{props.nomeEvento}</s.Title>
                    <s.Website>{props.website}</s.Website>
                </s.Col>
            </s.Row>

            <s.Col>
                <s.Cands>
                    <s.CandNum>{props.candNum}</s.CandNum>
                    <s.CandLabel>Candidatos</s.CandLabel>
                </s.Cands>
            </s.Col>
        </s.Container>
    )
}
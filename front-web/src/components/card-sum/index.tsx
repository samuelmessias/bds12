import { SalesSummaryData } from '../../types';
import { formatPrice } from '../../util/formatters';
import './styles.css';

type Props = {
    salesSummaryData: SalesSummaryData;
}

function CardSum({ salesSummaryData }: Props) {
    return (
        <div className="card-sum-container">
            <div>
                <h1>{formatPrice(salesSummaryData.sum)}</h1>
                <h3>Total de vendas</h3>
            </div>
        </div>
    );
}

export default CardSum;
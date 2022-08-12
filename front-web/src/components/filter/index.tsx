import { useEffect, useState } from 'react';
import { FilterData, Store } from '../../types';
import { makeRequest } from '../../util/request';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import './styles.css';

export type FormSearchData = {
    store: Store | null;
};

type Props = {
    onSubmitFilter: (data: FilterData) => void;
}

function Filter({ onSubmitFilter }: Props) {
    const [selectStores, setSelectStores] = useState<Store[]>([]);

    const [store, setStores] = useState<Store>();

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control,
    } = useForm<FilterData>();

    useEffect(() => {
        makeRequest
            .get<Store[]>('/stores')
            .then((response) => {
                setSelectStores(response.data);
            })
            .catch(() => {
                console.log('Error to fetch sales by date');
            });
    }, []);

    const onSubmit = (formData: FilterData) => {
        onSubmitFilter(formData);
    };

    const handleChangeStore = (value: Store) => {
        setValue('store', value);

        const obj: FilterData = {
            store: getValues('store'),
        };

        onSubmitFilter(obj);

        setStores(value);
    };


    return (
        <div className="filter-container base-card">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="store"
                    control={control}
                    render={({ field }) => (
                        <Select {...field}
                            options={selectStores}
                            isClearable
                            placeholder="Selecione a loja"
                            onChange={(value) => handleChangeStore(value as Store)}
                            getOptionLabel={(store: Store) => store.name}
                            getOptionValue={(store: Store) => String(store.id)}
                            classNamePrefix="serach-container-select"
                        />
                    )}
                />
            </form>
        </div >
    );
}

export default Filter;
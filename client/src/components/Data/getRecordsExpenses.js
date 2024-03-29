import Record from '../Record/Record';

const getRecordsExpenses = (records) => {
    return records
        .filter((record) => record.wallet !== null && record.sum < 0)
        .sort(function (a, b) {
            return a.sum - b.sum;
        })
        .map((record) => {
            return <Record key={record.id} record={record} />;
        });
};

export default getRecordsExpenses;

const getGroups = (transactions) => {
	const groupsByDay = transactions.reduce((group, record) => {
		if (!group[record.date]) {
			group[record.date] = [];
		}
		group[record.date].push(record);
		return group;
	}, {});

	const groupsByDayWithSum = Object.keys(groupsByDay)
		.sort((a, b) => new Date(b) - new Date(a))
		.map((day) => {
			return {
				day,
				records: groupsByDay[day],
				sum: groupsByDay[day].reduce((acc, current) => {
					if (!current.wallet) {
						return acc;
					} else return acc + current.sum;
				}, 0),
			};
		});

	const groupsByMonth = groupsByDayWithSum.reduce((group, record) => {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const date = record.day;
		const dateYear = new Date(date).getFullYear();
		const dateMonth = monthNames[new Date(date).getMonth()];
		if (!group[`${dateMonth} ${dateYear}`]) {
			group[`${dateMonth} ${dateYear}`] = [];
		}
		group[`${dateMonth} ${dateYear}`].push(record);
		return group;
	}, {});

	return Object.keys(groupsByMonth).map((month) => {
		return {
			month,
			records: groupsByMonth[month],
		};
	});
};

export default getGroups;

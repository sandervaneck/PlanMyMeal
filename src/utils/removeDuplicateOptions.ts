export const removeDuplicateOptions = (
    arr: {
        name: string;
        id: string;
    }[]
) => {
    const result: {
        name: string;
        id: string;
    }[] = [];

    for (const item of arr) {
        if (!result.map((i) => i.id).includes(item.id)) {
            result.push({
                name: item.name,
                id: item.id,
            });
        }
    }

    return result;
};

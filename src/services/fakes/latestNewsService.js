
const LatestNewsServiceFake = (data, transform, onSuccess, onError) => {
    if (onSuccess) {
        onSuccess([
            {
                id: 'n1',
                title: 'Global News Markets',
                summary: 'News Summary 1',
                publicationDate: '01-MAY-2019',
                source: 'WSJ',
                rating: 3, 
                category: 'Financial',
                author: {
                    firstName: 'John',
                    lastName: 'Smith' 
                }
            },
            {
                id: 'n2',
                title: 'Global News Markets',
                summary: 'News Summary 2 ',
                publicationDate: '01-MAY-2019',
                source: 'WSJ',
                rating: 3, 
                category: 'Financial',
                author: {
                    firstName: 'John',
                    lastName: 'Smith' 
                }
            }
        ])
    }
}

export default LatestNewsServiceFake;
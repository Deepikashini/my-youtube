import React from 'react'

const commentsData = [
    {
        name: 'Deepika',
        text: 'New Comment',
        replies: [
            {
                name: 'Mylo',
                text: 'This Looks great',
                replies: [
                    {
                        name: 'Deepika',
                        text: 'Thanks Avishiya',
                        replies:[
                        ]
                    },
                    {
                        name: 'Avishiya',
                        text: 'Lets party',
                        replies:[
                            {
                                name: 'Mylo',
                                text: 'Let me also join the party',
                                replies:[
                                ]
                            },
                            {
                                name: 'Juju',
                                text: 'Let me flim this party on my iPhone',
                                replies:[
                                    {
                                        name: 'Mylo',
                                        text: 'Aiyoo scene poda vanthuta',
                                        replies:[
                                            {
                                                name: 'Deepika',
                                                text: 'Exactly',
                                                replies:[
                                                ]
                                            },
                                            {
                                                name: 'Avishiya',
                                                text: '🤣',
                                                replies:[
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        name: 'Avishiya',
                                        text: 'Podhum hashini shut up!!',
                                        replies:[
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'Avishiya',
        text: 'Good Work Deepika',
        replies: [
            {
                name: 'Deepika',
                text: 'Thanks Avishiya',
                replies:[
                ]
            },
        ]
    },
    {
        name: 'Juju',
        text: 'Where is my iPhone',
        replies: [
            {
                name: 'Mylo',
                text: 'I want Biscuits',
                replies:[
                ]
            },
            {
                name: 'Deepika',
                text: 'Juju over scene',
                replies:[
                    {
                        name: 'Mylo',
                        text: 'Bubble I want Biscuits',
                        replies:[
                            {
                                name: 'Deepika',
                                text: 'Mylo No!, come out first',
                                replies:[
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'Avishiya',
        text: 'Good Work Deepika',
        replies: [
            {
                name: 'Deepika',
                text: 'Thanks Avishiya',
                replies:[
                ]
            },
            {
                name: 'Avishiya',
                text: 'Lets party',
                replies:[
                    {
                        name: 'Mylo',
                        text: 'Let me also join the party',
                        replies:[
                        ]
                    },
                    {
                        name: 'Juju',
                        text: 'Let me flim this party on my iPhone',
                        replies:[
                            {
                                name: 'Mylo',
                                text: 'Aiyoo scene poda vanthuta',
                                replies:[
                                    {
                                        name: 'Deepika',
                                        text: 'Exactly',
                                        replies:[
                                        ]
                                    },
                                    {
                                        name: 'Avishiya',
                                        text: '🤣',
                                        replies:[
                                        ]
                                    },
                                ]
                            },
                            {
                                name: 'Avishiya',
                                text: 'Podhum hashini shut up!!',
                                replies:[
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
    
]

const Comments = ({data}) => {
    const {name, text, replies} = data;
return(
    <div className='px-5 m-4 flex shadow-sm bg-gray-100 rounded-sm'>
        <img className="w-12 h-12" alt='user' src='https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'/>
        <div>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
)
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <>
            <Comments key={index} data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies} />
            </div>
        </>
    ))
}

const CommentsContainer = () => {
  return (
    <div className="m-4 px-5 w-[59rem]">
      <h1 className="font-bold">Comments:</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;

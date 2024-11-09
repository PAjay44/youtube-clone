import React from "react";

const commentsData = [
  {
    id: 1,
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        id: 2,
        name: "John Doe",
        text: "I completely agree with you! This is amazing.",
        replies: [
          {
            id: 3,
            name: "Jane Smith",
            text: "Yeah, totally! This is exactly what I was thinking.",
            replies: [],
          },
          {
            id: 4,
            name: "Robert Brown",
            text: "But I think there's a better way to do it.",
            replies: [
              {
                id: 5,
                name: "Akshay Saini",
                text: "What do you mean? Can you explain it more?",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Michael Johnson",
        text: "Interesting point, but I have a different perspective.",
        replies: [
          {
            id: 7,
            name: "Akshay Saini",
            text: "I would love to hear your perspective! Share it.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Sophia Williams",
    text: "I think this needs more attention. Great video!",
    replies: [
      {
        id: 9,
        name: "David Lee",
        text: "Totally agree. This is some high-quality content.",
        replies: [],
      },
      {
        id: 10,
        name: "Anna Green",
        text: "Amazing! Please make more videos like this.",
        replies: [
          {
            id: 11,
            name: "Sophia Williams",
            text: "I'm definitely planning to! Stay tuned.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Charlie King",
    text: "This is just what I needed. Thank you for making this video!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

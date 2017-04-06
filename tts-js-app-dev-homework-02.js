var email = {
  owner: 'Niki',
  folders: [
    {
      name: 'inbox',
      messages: [
        {
          subject: 'hi',
          sender: 'mom@gmail.com',
          text: 'coming to visit next week!'
        },
        {
          subject: 'hi2',
          sender: 'dad@gmail.com',
          text: 'just 7 days until we are in charlotte!'
        }
      ]
    },
    {
      name: 'outbox',
      messages: [
        {
          subject: 'see you soon',
          recipient: 'mom@gmail.com',
          text: 'see you soon - will meet you at airport'
        }
      ]
    },
    {
      name: 'drafts',
      messages: [
        {
          subject: 'what time?',
          recipient: 'dad@gmail.com',
          text: 'hey! what time does your flight get in?'
        }
      ]
    }
  ]
};

console.log(email.folders.name);
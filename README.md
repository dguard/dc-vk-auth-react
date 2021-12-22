<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" width="320" alt="React Logo" /></a>
</p>


## Description
[React](https://reactjs.org/) is a JavaScript library for building user interfaces.

Current app uses `MobX` and `styled components`.


| Service | Repo |
| --- | --- |
| API 📦 | [dc-vk-auth-api](https://github.com/dguard/dc-vk-auth-api) |
| Frontend 📦 | dc-vk-auth-react (you are inside) |

## Captures
<p align="center">
  <img src="/captures/currency-exchange-service.png" alt="screenshot" />
</p>
<p align="center">
  <img src="/captures/graphql.png" alt="screenshot" />
</p>
<p align="center">
  <img src="/captures/user-profile.png" alt="screenshot" />
</p>


## Installation

Update `.env` file  based on `.env.sample`

The app uses parts of vk-auth-react-nestjs for authentication:

https://github.com/ndrwbv/vk-auth-react-nestjs

1. Create a new VK standalone application: 

https://vk.com/editapp?act=create
2. Update REACT_APP_VK_CLIENT_ID

```bash
$ yarn
```

## Running the app


```bash
# dev
$ yarn run dev

# build
$ yarn run build
$ yarn start
```

## Support

React is a JavaScript library for building user interfaces. [Read more here](https://reactjs.org/community/support.html).

## Stay in touch

- Contributor: [Alexander Serditov](https://cv.digitallyconstructed.ru/)
- Uses parts from contributor: [Andrew Boev](https://github.com/ndrwbv)
## License

  React is [MIT licensed](LICENSE).

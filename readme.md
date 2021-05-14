# use-form-validation

<b>use-form-validation</b> is a react hook that allows validate form easily.

## Installing

```bash
npm install @rafaelvfcarvalho/use-form-validation --save
```

or

```bash
yarn add @rafaelvfcarvalho/use-form-validation
```

## Using

This is an example using Typescript.   

```jsx
import useFormValidation from '@rafaelvfcarvalho/use-form-validation';
import { useEffect, useRef } from 'react';
import * as yup from 'yup';

export default function Form() {
  const { errors, registry } = useFormValidation();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const formSchema = yup.object().shape({
      name: yup.string().required('Name Required').min(7, 'Name must have at least 7 characters'),
      email: yup.string().required('Email required').email('Type a valid email'),
    })

    registry(formSchema, [name, email])
  }, [])

  return (
    <form>
        <input type="text" name="name" ref={name} />
        <span>{errors.name}</span>
        <input type="text" name="email" ref={email} />
        <span>{errors.email}</span>
    </form>
  );
}
```

## Show Your Support

If you enjoyed this project, please [![Star on GitHub][github-star-badge]][github-star] the repo to show your support.
Feel free to give feedback and make a pull request.

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/carvalho-rafael">
          <img width="150" height="150" src="https://avatars.githubusercontent.com/carvalho-rafael">
          </br>
          Rafael Carvalho:
          </br>
          Github
        </a>
        <div>
          <a href="https://www.instagram.com/desenvolvedor.jr/">
            Instagram
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>

[github-star-badge]: https://img.shields.io/github/stars/carvalho-rafael/use-form-validation.svg?style=social
[github-star]: https://github.com/carvalho-rafael/use-form-validation/stargazers

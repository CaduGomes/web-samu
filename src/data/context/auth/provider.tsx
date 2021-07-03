import React, { ReactNode } from "react";
import { AuthContext } from "./context";
import { IObserver, ISubject } from "core/observer";
import { AuthUseCase } from "domain/usecases";
import { AuthRepositoryImpl } from "data/repositories";

type Props = {
  children: ReactNode;
  authCliente: AuthUseCase;
};

export class AuthProvider extends React.Component<Props> implements IObserver {
  state = {
    user: null,
    loading: true,
  };

  async tryAutoSignIn() {
    try {
      await this.props.authCliente.autoSignIn();
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ loading: false });
  }

  componentDidMount() {
    this.props.authCliente.attach(this);
    this.tryAutoSignIn();
  }

  componentWillUnmount() {
    this.props.authCliente.detach(this);
  }

  update(subject: ISubject) {
    if (subject instanceof AuthRepositoryImpl) {
      this.setState({ user: subject.userData });
    }
  }

  render() {
    return (
      <AuthContext.Provider
        value={{ user: this.state.user, loading: this.state.loading }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

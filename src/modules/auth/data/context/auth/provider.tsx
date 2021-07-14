import React, { ReactNode } from "react";
import { AuthContext } from "./context";
import { IObserver, ISubject } from "core/observer";
import { AuthUseCase, PersistRoleUseCase } from "../../../domain/usecases";
import { AuthRepositoryImpl } from "../../repositories";
import { UserEntity, UserRoleEntity } from "../../../domain/entities";

type Props = {
  children: ReactNode;
  authCliente: AuthUseCase;
  persistRoleClient: PersistRoleUseCase;
};

type State = {
  user: UserEntity | null;
  role: UserRoleEntity | null;
  loading: boolean;
};

export class AuthProvider extends React.Component<Props> implements IObserver {
  constructor(props: Props) {
    super(props);
    this.setRole = this.setRole.bind(this);
  }

  state: State = {
    user: null,
    role: null,
    loading: true,
  };

  setRole(role: UserRoleEntity) {
    this.setState({
      role: role,
    });
    this.props.persistRoleClient.save({ role });
  }

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
    const { data } = this.props.persistRoleClient.restore();

    if (data) {
      const role = data as UserRoleEntity;
      this.setRole(role);
    }
  }

  componentDidUpdate() {
    if (!this.state.loading && !this.state.user?.uid && this.state.role) {
      this.setState({
        role: null,
      });
    }
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
        value={{
          user: this.state.user,
          loading: this.state.loading,
          role: this.state.role,
          setRole: this.setRole,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

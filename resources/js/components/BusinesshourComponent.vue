<template>
    <div class="col-xl-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Basic example</h4>
                <p class="card-title-desc">For basic styling—light padding and
                    only horizontal dividers—add the base class <code>.table</code> to any
                    <code>&lt;table&gt;</code>.
                </p>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table mb-0">

                        <thead>
                            <tr>
                                <th>Business hours</th>
                                <th>Active</th>
                                <th>Time zone</th>
                                <th>Default</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><input type="checkbox" id="switch1" switch="none" checked />
                                    <label for="switch1" data-on-label="On" data-off-label="Off"></label>
                                </td>
                                <td>Otto</td>
                                <td><input class="form-check-input" type="checkbox" id="remember-check"></td>
                                <td><button type="button" class="btn btn-info btn-rounded waves-effect waves-light"
                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop">Editer</button>

                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                        data-bs-keyboard="false" tabindex="-1" role="dialog"
                                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Etes vous sûr de vouloir supprimer ce timezone ?</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-light"
                                                        data-bs-dismiss="modal">Non</button>
                                                    <button type="button" class="btn btn-primary">Oui</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" data-bs-toggle="modal" data-bs-target=".bs-example-modal-sm"
                                        class="btn btn-danger btn-rounded waves-effect waves-light">Supprimer</button>
                                    <!--  Small modal example -->
                                    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog"
                                        aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-sm">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="mySmallModalLabel">Créer une timezone</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="mb-3">
                                                        <label for="example-text-input" class="form-label">Business
                                                            hours</label>
                                                        <input class="form-control" type="text" value="Artisanal kale"
                                                            id="example-text-input">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label">Select</label>
                                                        <select class="form-select">
                                                            <option>Select</option>
                                                            <option>Large select</option>
                                                            <option>Small select</option>
                                                        </select>
                                                    </div>
                                                    <input type="checkbox" id="switch3" switch="bool" checked />
                                                    <label for="switch3" data-on-label="Oui" data-off-label="Non"></label>

                                                    <div class="mb-3">
                                                        <button type="button"
                                                            class="btn btn-primary waves-effect waves-light">Envoyer</button>
                                                    </div>
                                                    <div class="mb-3">
                                                        <button type="button"
                                                            class="btn btn-secondary waves-effect waves-light">Annuler</button>
                                                    </div>
                                                </div>
                                            </div><!-- /.modal-content -->
                                        </div><!-- /.modal-dialog -->
                                    </div><!-- /.modal -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- end card body -->
        </div>
        <!-- end card -->
    </div>
    <!-- end col -->
</template>

<script>

export default {

}
</script>